export interface Validator {
  name: string;
  validator: any;
  pattren: string;
  min: any;
  max: any;
  message: string;
}
export interface FieldConfig {
  disabled?: boolean,
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
  htmlClass?: string;
}
