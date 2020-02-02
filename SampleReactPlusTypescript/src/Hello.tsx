import React from "react";

export interface HelloProps {
    compiler: string;
    framework: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    render(): React.ReactElement {
        return <h1> Hello From {this.props.compiler} and {this.props.framework}</h1>;
    }
}