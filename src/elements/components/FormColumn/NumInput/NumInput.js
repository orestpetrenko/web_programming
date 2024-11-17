import { useState } from "react";
import { Form } from "react-bootstrap";
import FilteringColumn from "../FilteringColumn";

import '../FilteringColumn.scss';

export default function NumInput({ label, state}) {
    const [value, setValue] = state;

    const [error, setError] = useState(false);

    const callback = (e) => {
        let num = Number(e.target.value);
        if (Number.isNaN(num) || num <= 0) {
            num = undefined;
            if (e.target.value.length !== 0) setError(true);
        }
        else {

            setError(false);
        }
        setValue(num);
    };

    let classes = "width-form mt-1";
    if(error){
        classes += " is-invalid";
    }

    return (
        <FilteringColumn label={label}>
            <Form.Control className={classes} onChange={callback} />
        </FilteringColumn>);
}