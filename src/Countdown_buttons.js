import React from 'react';
import {Button, Input} from 'reactstrap';
import './App.css';
import $ from 'jquery';

const StopWatch = (props) => {

    function getValue(e) {
        props.countdown(e.target.value);
    }

    function getValue_two(e) {
        props.countdown_two(e.target.value);
    }

    function clear() {
        props.clear();
    }

    $(document).ready(
        function () {
            $('.clearInput').click(
                function () {
                    $('.style_Input').val("");
                }
            );
        }
    )

    const startButton = (<Button className="btn btn-secondary ml-2 clearInput" onClick={props.startCountdown}>
        Start
    </Button>);
    const stopButton = (<Button className="btn btn-danger ml-2" onClick={props.stop}>
        Stop
    </Button>);

    return (
        <div className="text-center">
            <div className="style_button_group mt-3">
                <Input type="text" className="style_Input ml-2" onChange={getValue} disabled={!props.disabled}/>
                <Input type="text" className="style_Input ml-2" onChange={getValue_two} disabled={!props.disabled}/>

            </div>
            <div className="mt-3 mb-2">
                {props.disabled ? startButton : stopButton}

                <Button className="btn btn-secondary ml-2 clearInput" onClick={clear}>
                    clear
                </Button>
            </div>
        </div>
    )
};

export default StopWatch;