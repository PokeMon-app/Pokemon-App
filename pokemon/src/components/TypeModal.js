import React from 'react';
import "./Style/TypeModal.css";
import Modal from "react-bootstrap/Modal";
const TypeModal = ({ parentCallback }) => {
    let isOpen = false;
    let showModal = false;
    const typeBlock1 = [
        {type: 'Water'},
        {type: 'Grass'},
        {type: 'Fire'}]
    const typeBlock2 = [
        {type: 'Poison'},
        {type: 'Fighting'},
        {type: 'Flying'}]
    const typeBlock3 = [
        {type: 'Rock'},
        {type: 'Ground'},
        {type: 'Electric'}]
    const typeBlock4 = [
        {type: 'Dragon'},
        {type: 'Bug'},
        {type: 'Ice'}]
    const typeBlock5 = [
        {type: 'Normal'},
        {type: 'Dark'},
        {type: 'Ghost'}]
    const typeBlock6 = [
        {type: 'Psychic'},
        {type: 'Fairy'},
        {type: 'Steel'}]

    const content = [{block: typeBlock1}, {block: typeBlock2}, {block: typeBlock3}, {block: typeBlock4}, {block: typeBlock5}, {block: typeBlock6}];

    const renderContent = content.map(section => {

        return (
            <div>
                <div className={"d-flex justify-content-around"} key={section.block}>{section.block.map(icon => {
                    return (
                        <div className={"my-2"} key={icon.type}>
                        <button onClick={() => {
                            parentCallback(!isOpen, !showModal);
                            }
                        }
                                className={(icon.type.toLowerCase()) + " btn-circle"}>{icon.type}</button>
                        </div>
                )
                })}</div>
            </div>
        )
    })

    return (
        <Modal.Body>
            <div>{renderContent}</div>
        </Modal.Body>
    )
}

export default TypeModal;