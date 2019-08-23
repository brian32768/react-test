import React, {useState, useEffect} from 'react'  // eslint-disable-line no-unused-vars
import {Card, CardTitle, CardText, Button} from 'reactstrap'  // eslint-disable-line no-unused-vars
import Modali, {useModali} from 'modali'  // eslint-disable-line no-unused-vars
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' // eslint-disable-line no-unused-vars
import {faPrint} from '@fortawesome/free-solid-svg-icons' // eslint-disable-line no-unused-vars

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas';

//import Mark from 'markup' // Description text can be in Markdown format!
//import PrintImage from './printImage';
import PrintPreviewImage from './printPreviewImage';

//import { getActiveMapSources } from '../../actions/mapSource';
//import { printed } from '../../actions/print';

import DefaultLayouts from './printLayouts';
//import GeoPdfPlugin from './geopdf';

const PrintButton = () => {
    const [printModal, togglePrintModal] = useModali({
        animated: true,
        closeButton: false,
        buttons: [
            <Modali.Button label="Print" onClick={(e)=>printMap(e)}/>,
            <Modali.Button label="Cancel" isStyleCancel onClick={() => togglePrintModal()}/>
        ]
    });
    const [title, setTitle] = useState("Clatsop County");
    const [template, setTemplate] = useState("ll");
    const [quality, setQuality] = useState("std");
    const [description, setDescription] = useState(""); // FIXME make Markdown work!

    const titleChanged = (e) => {
        setTitle(e.target.value);
    }

    const templateChanged = (e) => {
        setTemplate(e.target.value);
    }

    const qualityChanged = (e) => {
        setQuality(e.target.value);
    }

    const descriptionChanged = (e) => {
        setDescription(e.target.value);
    }

    const printMap = (e) => {
        const orientation = DefaultLayouts[template].orientation
        const units = DefaultLayouts[template].units
        const format = DefaultLayouts[template].page

        console.log("Printing", title, template, quality, '"' + description + '"', DefaultLayouts[template]);
        html2canvas(document.querySelector(".ol-viewport")).then((canvas) => {
//            document.body.appendChild(canvas)
            const data = canvas.toDataURL('image/png');
            const doc = new jsPDF({
                orientation,
                units,
                format,
                compress:true
            });
            doc.text(title, 10,10)
            doc.addImage(data, 'PNG', 10,30)
            doc.save('cc-webmaps-' + template + '.pdf')
        });
        togglePrintModal()
        e.preventDefault();
    }

//    const layoutselect = DefaultLayouts.map()
//        <option value="ll">{DefaultLayouts["ll"].label}</option>

    return (
        <>
            <Button onClick={togglePrintModal}><FontAwesomeIcon icon={faPrint}/>Print</Button>
            <Modali.Modal {...printModal}>
                <div className="print-modal">
                <div className="print-preview">
                <PrintPreviewImage/>
                </div>
                <div className="print-form">
                <form>
                    Title: <input type="text" value={title} onChange={titleChanged}/><br />
                    Template: <select value={template} onChange={templateChanged}>
                        <option value="ll">{DefaultLayouts["ll"].label}</option>
                        <option value="lp">Letter-Portrait</option>
                        <option value="tl">11x17"-Landscape</option>
                        <option value="tp">11x17"-Portrait</option>
                    </select><br />
                    Quality: <select value={quality} onChange={qualityChanged}>
                        <option value="std">Standard</option>
                        <option value="btr">Better</option>
                        <option value="bst">Best</option>
                    </select><br />
                    Additional descriptive text:
                    <textarea value={description} onChange={descriptionChanged}/>
                </form>
                </div>
                </div>
            </Modali.Modal>
        </>
    );
}
export default PrintButton;
