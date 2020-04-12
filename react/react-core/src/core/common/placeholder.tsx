import React, {Component} from 'react';
import {EditorContext} from "../../types";
import {withEditorContext} from "./editorcontext";

export interface PlaceHolderModel extends EditorContext {
    hidePlaceHolder: boolean
    isEmpty: boolean
    componentTitle?: string
    classAppend?: string
    emptyTextAppend?: string
}

class EditorPlaceHolder extends Component<PlaceHolderModel>{

    static DEFAULT_EMPTY_TEXT_LABEL: string = 'Please configure the component';

    render() {
        if (this.showPlaceHolder()) {
            const part1: string = (this.props.componentTitle != null && this.props.componentTitle.length > 0) ?  this.props.componentTitle +  ' - ' : '';
            const part2: string = (this.props.emptyTextAppend != null) ?  this.props.emptyTextAppend : EditorPlaceHolder.DEFAULT_EMPTY_TEXT_LABEL;
            const emptyText = part1 + part2;
            
            return (
                this.renderPlaceHolder(emptyText)
            )
        } else return null;
    }


    renderPlaceHolder(emptyText: string) {
        return <div
            className={'cq-placeholder' + (this.props.classAppend != null? ' ' + this.props.classAppend : '')}>
            {emptyText}
        </div>;
    }

    showPlaceHolder() {
        return !this.props.hidePlaceHolder && this.props.isEmpty && this.isEditOrPreview();
    }

    isEditOrPreview() {
        return this.props.wcmmode === 'edit' || this.props.wcmmode === 'preview';
    }
}

export default withEditorContext(EditorPlaceHolder);