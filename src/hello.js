
import * as React from 'react';

function mapProps<PropsInput: {}, PropsOutput: {}>(
  mapperFn: (PropsInput) => PropsOutput,
): (React.ComponentType<PropsOutput>) => React.ComponentType<PropsInput> {
  return Component => {

    // new Component
    return props => {
        const newProps = mapperFn(props);
        <Component {...newProps} />
    }
  };
}

type Props = {
    x: number,
    y: number,
};

class myComponent extends React.Component<Props> {
    render() {
        return (
        <div>
            <span>{this.props.x}</span>
            <span>{this.props.y}</span>
        </div>
        );
    }
}


const WrappedComponent = mapProps((o) => ({...o, y: 30}))(myComponent);

<WrappedComponent x={'haha'} />


