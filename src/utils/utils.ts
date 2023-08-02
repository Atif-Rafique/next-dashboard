
import { Rule } from "antd/lib/form";


// ================================= Input Rule =================================
export const FormInputRules = (name: string, rules?: Rule[]) => {
    return {
        name,
        // ================= Incase if label is Required =================
        // rules: rules ?? [{ required: true, message: `${label} is required` }],

        rules: rules ?? [{ required: true, message: `Required field` }],
    };
};




// ================================= Not Allowing Empty Spaces in Start of the Input =================================
export const handleInputTrimStart = (value: any) => {
    return value.trimStart();
};

// ================================= Not Allowing long Empty Spaces in the Input =================================
export const handleInputTrimSpaces = (value: any) => {
    if (typeof value === 'string') {
        // ----- For single input fields -----
        return value.trim().replace(/\s+/g, ' ');
    } else if (typeof value === 'object') {

        // ----- For whole form objects -----
        const trimmedValues: any = {};

        // ----- Loop through the objects values -----
        for (const [key, val] of Object.entries(value)) {

            // ----- Trim the value if it's a string. If the value is not a string, leave it as it is -----
            if (typeof val === 'string') {
                trimmedValues[key] = val.trim().replace(/\s+/g, ' ');
            } else {
                trimmedValues[key] = val;
            }
        }

        return trimmedValues;
    } else {
        return value;
    }
};
