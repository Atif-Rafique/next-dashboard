

// ====================== Ant Components ======================
import { Form, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";


// ====================== Utils ======================
import { FormInputRules } from '@/utils/utils';



// ====================== Interfaces ======================
import { AppInputProps } from '@/types/app-input.types';




const AppInput = ({ ...args }: AppInputProps) => {


    const { label, name, size, type, defaultValue, onChange, disabled, placeholder } = args;


    const formControl = FormInputRules(name);



    return (
        <>
            <label className="text-base font-semibold">{label}</label>
            <Form.Item
                {...formControl}
                style={{ marginBottom: "10px" }}
            >
                {type === "password" ? (
                    <Input.Password
                        size={size}
                        onChange={onChange}
                        placeholder={placeholder}
                        autoComplete='current-password'
                        style={{ height: "50px" }}
                        iconRender={(visible: any) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                    />
                ) : (
                    <Input
                        size={size}
                        type={type}
                        defaultValue={defaultValue}
                        onChange={onChange}
                        autoComplete='label'
                        placeholder={placeholder}
                        disabled={disabled}
                        style={{ height: "50px", }}
                    />
                )}

            </Form.Item>
        </>
    )
}

export default AppInput