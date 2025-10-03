import { Checkbox, FormControlLabel } from "@mui/material";

export default function CustomCheck({val, setVal, label, required, other_val}) {
    const handleChange = (event) => {
        if (other_val) {
            setVal((prevVal) => {
                if (prevVal.includes(other_val)) {
                    return prevVal.filter((item) => item !== other_val);
                } else {
                    return [...prevVal, other_val];
                }
            });    
        } else {
            setVal(event.target.checked);
        }
    };
    return (
        <FormControlLabel 
            label={label}
            control={
                <Checkbox
                    required={required}
                    checked={other_val ? val.includes(other_val) : val}
                    onChange={handleChange}
                />
            }
        />
    );
}