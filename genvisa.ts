export interface VisaType {
  visa_type_id: string,
  base_price: number,
  visa_type_label: string,
  extra_cost_ids: string[], //used for server to obtain all the extra cost metadata
  is_e_visa: boolean,
  country_code: string,
  extra_required_documents: string[] | null,
  common_question_ids: string[] | null
}

export interface VisaKit {
  kit_id: string,
  required_visa_ids: string[],
  extension_visa_ids: string[],
  kit_label: string;
  visa_types: Record<string, VisaType> // string is visa_type_id
  extra_costs: Record<string, ExtraCost>;
  required_extra_costs: string[];
}

export interface ChosenExtraCosts {
  //number is cost at time of submission, so changed costs do not affect past submissions
  [extra_cost_id: string]: number
}

export interface ExtraCost {
  extra_cost_id: string,
  cost: number,
  label: string,
  combines_with: string | null | undefined;
}


export interface Address {
  line_1: string,
  line_2: string,
  city: string,
  state: string,
  zip: string,
  country_code: string
}


export interface TravelDocument {
  submission_id: string,
  time_uploaded: string,
  travel_document_id: string,
  archived: boolean,
  title: string,
  notes: string,
  author: string
}
export interface ActivityLog {
  submission_id: string,
  log_id: string,
  time: string,
  author: string,
  info_type: string,
  info: string
}

export interface FetchTableOptions {
  currentPage: number;
  pageSize: number;
  filterOption: string;
  searchQuery?: string | undefined;
}