import React, {Component} from "react";
import { tada } from "react-animations";
import styled, {keyframes} from 'styled-components';
import heart from '../../assets/heart.png';

const Tadawiggle = styled.div`animation: 2s ${keyframes`${tada}`} infinite`;

export default class Tada extends Component {
    render(){
        return(<Tadawiggle>
            <img src={heart} style={{ width: "50px" }} alt="heart" />
        </Tadawiggle>)
    }
}