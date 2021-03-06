import React from 'react';
import nano  from '../cars_images/nano.png';

class Counter extends React.Component {
    // Initial Mount phase
    constructor(props){
        super(props);
        console.log('constructor !!');
        // Initialize state
        this.state = {
            count: 0,
            name: '', 
        }
        // Bind the function in the constructor - when we do not use Arrow functions
        // this.handleClickCountDecrement = this.handleClickCountDecrement.bind(this); 
    }

    //  Componnet Life cycle Methods
    componentWillMount() {
        console.log('component Will Mount ');
    }

    componentDidMount() {
        console.log('Component Did Mount');
    }

    // Updation
    componentWillReceiveProps() {
        console.log('Will receive props !!! =');
    }

    componentWillUpdate(){
        console.log('Will Update');
    }

    componentDidUpdate() {
        console.log('Did Update !');
    }

    shouldComponentUpdate() {
        console.log('Should Component Update');
        return true;
    }

    handleClickCount = () => {
        // this.setState({
        //     count: this.state.count + 1,
        // });

        const { count } = this.state;
        this.setState({
            count: count + 1,
        });
    }

    handleClickCountDecrement = () => {
        if (this.state.count === 0) return;
        this.setState({
            count: this.state.count - 1,
        });

        const { count } = this.state;
        if (count === 0) return;
        this.setState({
            count: count - 1,
        });
    }

    // LINE 15: TO be used when the handler is written in below Format - Explicity Bind the Function
    // handleClickCountDecrement() {
    //     if (this.state.count === 0) return;
    //     this.setState({
    //         count: this.state.count - 1,
    //     });

    //     const { count } = this.state;
    //     if (count === 0) return;
    //     this.setState({
    //         count: count - 1,
    //     });
    // }

    handleInputText = (e) => {
        this.setState({
            name: e.target.value,
        })
        // console.log('value =', e.target.value);
    }

    //  Render to UI - returns JSX
    render() {
        // console.log('Counter Render =', this.props.text);
        // console.log('Count state =', this.state.count);
        const { text, text1, handleShowImage, displayImage, handleHideImage } = this.props;
        const { count, name } = this.state;
        return(
            <div>
                {/* <div>Count : {this.state.count}</div> */}
                {/* Use Destructure */}
                <div>
                    Count: {count}
                </div>
                <button onClick={this.handleClickCount}>
                    {text}
                </button>
                <button onClick={this.handleClickCountDecrement}>
                    {text1}
                </button>
                <br />
                {/*  Uncontrolled component / Input element */}
                {/* <input type="text" /> */}
                {/* Controlled input element */}
                <input type="text" value={name} onChange={this.handleInputText} />
                Name : {name}
                <div>
                    <button onClick={handleShowImage}>
                        SHOW
                    </button>
                    <button onClick={handleHideImage}>
                        HIDE
                    </button>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        marginLeft: '45%',
                    }}>
                        {displayImage && <img src={nano} alt="nano" style={{ width: '100%', height: '100%' }} /> }
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter;