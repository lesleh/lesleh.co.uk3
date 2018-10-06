import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import dig from './dig';

type ComponentTree = {
  [s: string]: ComponentTree | Component
}

const REACT_APP_SELECTOR = '[data-react-app]'

/**
 * Used to mount a component into a HTMLElement based on the data-react-app property set
 * on the element. Uses dot-notation to find the specific component in the provided component
 * tree. For example, if you Specify `data-react-app="One.Two.Three"`, it will attempt to read
 * `components.One.Two.Three` and render the component into the element. If it cannot find the
 * specified component it will issue a warning.
 *
 * @param element An HTMLElement with data-react-app and (optionally) data-react-props set
 * @param components An object containing a tree of components to search
 */
const mountComponent = function (element: HTMLElement, components: ComponentTree) {
  const appName = element.dataset.reactApp;

  if (!appName) {
    console.warn('Missing data-react-app attribute');
    return;
  }

  const props = JSON.parse(element.dataset.reactProps || '{}');
  const app = dig(appName, components) as any;

  if (!app) {
    console.warn('Attempted to load unknown React app', appName);
    return;
  }

  render(React.createElement(app, props), element);
};

/**
 * This will search the given rootElement for elements with `data-react-app` and attempt to
 * render them with the components.
 * @param rootElement the element to begin searching from
 * @param components an object containing a tree of React.Component subclasses
 */
const mountComponents = function (rootElement: HTMLElement | Document, components: any) {
  Array.from(rootElement.querySelectorAll(REACT_APP_SELECTOR)).forEach((element) => {
    mountComponent(element as HTMLElement, components);
  });
};

const unmountComponents = function (rootElement: HTMLElement | Document, components: any) {
  Array.from(rootElement.querySelectorAll(REACT_APP_SELECTOR)).forEach((element) => {
    unmountComponentAtNode(element)
  });
};

export { mountComponent, mountComponents, unmountComponents };
