export interface VisaType {
  visa_type_id: string,
  base_price: number,
  visa_type_label: string,
  extra_cost_ids: string[]
}


export interface ExtraCost {
  extra_cost_id: string,
  cost: number,
  label: string
}

export interface VisaKit {
  kit_id: string,
  required_visa_ids: string[],
  extension_visa_ids: string[],
  kit_label: string,
  visa_types: Record<string, VisaType> // string is visa_type_id
  extra_costs: Record<string, ExtraCost>
}
