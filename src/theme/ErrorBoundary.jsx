import { Component } from "react";
export default class ErrorBoundary extends Component {
    state;
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
    }
    render() {
        if (this.state.hasError) {
            <>something wrong</>;
        }
        return this.props.children;
    }
}
