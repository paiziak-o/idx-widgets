import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import widgets from './widgets';
import { toCamelCase } from './utils';

const rendered: FC[] = [];

const renderCore = (selector: string, callback: Function): void => {
  const params: { [key: string]: string | boolean } = {};

  document.querySelectorAll(selector).forEach((element) => {
    Array.from(element.attributes).forEach((attr) => {
      const attributeName: string = toCamelCase(attr.name.replace('data-', ''));
      if (attributeName !== 'class') {
        params[attributeName] = attr.value === 'false' ? false : attr.value || true;
      }
    });

    try {
      callback(params, element);
    } catch (e) {
      console.error(e);
    }
  });
};

interface Params {
  idxWidget: string,
}

// find elements by attribute and render widget
const renderWidget = (): void => {
  renderCore('[idx-widget]', (params: Params, element: any) => {
    const Widget = widgets[params.idxWidget];

    if (Widget) {
      ReactDOM.render(<Widget />, element);

      if (rendered.indexOf(element) === -1) rendered.push(element);
    }
  });
};

renderWidget();
