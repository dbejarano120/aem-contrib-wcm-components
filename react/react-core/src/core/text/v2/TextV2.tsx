/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React from 'react';
import {CoreComponent} from '../../../types';
import AbstractCoreComponent from "../../AbstractCoreComponent";

export interface TextV2Model extends CoreComponent{
    text?: string;
    richText?: boolean
}

export function TextV2IsEmptyFn(props:TextV2Model): boolean{
    return props.text == null || props.text.length === 0;
}

export class TextV2<Model extends TextV2Model> extends AbstractCoreComponent<Model, any> {

    public static defaultProps = {
        hidePlaceHolder: false,
        isRichText: false
    };

    isEmpty(): boolean{
        return TextV2IsEmptyFn(this.props);
    }

    getEmptyPlaceHolderText(): string {
        return 'Contrib Text V2';
    }

    renderRichText(){
        const text:string = this.props.text as string;
        return (
            <div className="cmp-text" dangerouslySetInnerHTML={{__html: text}}></div>
        )
    }

    renderPlainText(){
        return (
            <div className="cmp-text">
                <p className="cmp-text__paragraph">{this.props.text}</p>
            </div>
        )
    }


    renderComponent(): JSX.Element {
        return (this.props.richText) ? this.renderRichText() : this.renderPlainText();
    }


}