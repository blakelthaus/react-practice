const h = React.createElement;

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hello: false };
    }

    render() {
        if (this.state.hello) {
            return 'You clicked the Hello Message.';
        }

        return h(
            'button',
            { onClick: () => this.setState({ hello: true }) },
            'Hello World'
        );
    }
}

const HelloDomContainer = document.querySelector('#hello_container');
ReactDOM.render(h(HelloWorld), HelloDomContainer);