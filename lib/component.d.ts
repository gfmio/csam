/**
 * Renders a component with props and children using Snabbdom
 * @param { String | (props, children) => any } component - The component to be rendered, which needs to
 *                                                          either be a string containing a valid HTML tag
 *                                                          or a functional component.
 * @param { any } props - The props object
 * @param { any[] } children - The children of the component
 */
export declare function component(component: string | ((props: any, children: any[]) => any), props?: any, children?: any[]): any;
