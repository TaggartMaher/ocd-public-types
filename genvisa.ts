export interface VisaType {
  visa_type_id: string,
  base_price: number,
  visa_type_label: string,
  extra_cost_ids: string[], //used for server to obtain all the extra cost metadata
  is_e_visa: boolean,
  country_code: string,
  extra_required_documents: string[] | null,
  common_question_ids: string[] | null
  custom_visa_type: boolean,
}

export interface VisaKit {
  kit_id: string,
  required_visa_ids: string[],
  extension_visa_ids: string[],
  kit_label: string;
  visa_types: Record<string, VisaType> // string is visa_type_id
  extra_costs: Record<string, ExtraCost>;
  required_extra_costs: string[];
  custom_kit: boolean;
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
  author: string,
  document_progress_state: number;
}
export interface ActivityLog {
  submission_id: string,
  log_id: string,
  time: string,
  author: string,
  info_type: string,
  info: string,
  important: boolean
}

export interface FetchTableOptions {
  currentPage: number;
  pageSize: number;
  filterOption: string;
  searchQuery?: string | undefined;
  includeDrafts?: boolean;
  table_type?: 'UNCLAIMED_NEW' | 'UNCLAIMED_VALIDATED' | 'UNCLAIMED_ALL' | 'TODO';
  includeCompleted?: boolean;
  minDate?: Date | null,
  maxDate?: Date | null,
  alpha_2_country_codes?: string[] | null;
}

export interface GroupMember {
  submission_id: string;
  customer_first_name: string;
  customer_middle_name: string;
  customer_last_name: string;
  trip_date_of_departure: Date;
}