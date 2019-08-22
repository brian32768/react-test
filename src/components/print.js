import React, {useState, useEffect} from 'react'  // eslint-disable-line no-unused-vars
import {Button} from 'reactstrap'  // eslint-disable-line no-unused-vars
import Modali, {useModali} from 'modali'  // eslint-disable-line no-unused-vars

const PrintButton = () => {
    const [printModal, togglePrintModal] = useModali({
        animated: true,
        closeButton: false
    });

    const printMap = (e) => {
        console.log("Printing", e);
        togglePrintModal();
    }

    return (
        <>
            <Button color="primary" onClick={togglePrintModal}>Print</Button>
            <Modali.Modal {...printModal}>
                <div className="overview">Preview of map</div>
                <Modali.Button onClick={printMap} label="Print"/>
                <Modali.Button label="Cancel" isStyleCancel onClick={() => togglePrintModal()}/>
            </Modali.Modal>
        </>
    );

/*
            <Modal isOpen={showModal} contentLabel="Print Map" style={modalStyle}>
            </Modal>
*/
}
export default PrintButton;
