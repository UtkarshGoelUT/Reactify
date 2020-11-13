import React, {  useContext } from 'react';
import { ngoContext } from '../../../context/ngoContext';
import Ngo from './Ngo/Ngo';
const Ngos = (props) => {

    const [ngo] = useContext(ngoContext);
    const id=props.match.params.id;
    const index=ngo.findIndex(x => x.name === id)
    return (
        <div>
            <Ngo info={ngo[index]}/>
        </div>
    );
}

export default Ngos;