import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function TextInputAutoComplete(props) {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={props.inputData}
            size='small'
            sx={{ width: 200, mr: 1 }}
            renderInput={(params) => <TextField {...params} label={props.label} />}
        />
    );
}





