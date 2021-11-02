import {
  AllEntities,
  Entity,
  PropertiesOf,
} from 'n8n-workflow';

type BambooHRMap = {
  employees: 'create' | 'get' | 'getDirectory' | 'update';
  employeeFiles: 'create' | 'del' | 'get' | 'getAll' | 'update';
  companyFiles: 'create' | 'del' | 'get' | 'getAll' | 'update';
  reports: 'get';
  accountInformation: 'getDetailsForFields' | 'getFields' | 'getTabularFields' | 'getUsers' | 'updateFields';
  tabularData: 'create' | 'get' | 'getAll' | 'update';
};

export type BambooHR = AllEntities<BambooHRMap>;

export type BambooHRAccountInformation = Entity<BambooHRMap, 'accountInformation'>;
export type BambooHRCompanyFiles = Entity<BambooHRMap, 'companyFiles'>;
export type BambooHREmployees = Entity<BambooHRMap, 'employees'>;
export type BambooHREmployeeFiles = Entity<BambooHRMap, 'employeeFiles'>;
export type BambooHRReports = Entity<BambooHRMap, 'reports'>;
export type BambooHRTabularData = Entity<BambooHRMap, 'tabularData'>;

export type CompanyFilesProperties = PropertiesOf<BambooHRCompanyFiles>;
export type EmployeesProperties = PropertiesOf<BambooHREmployees>;
export type EmployeeFilesProperties = PropertiesOf<BambooHREmployeeFiles>;
export type ReportsProperties = PropertiesOf<BambooHRReports>;
export type AccountInformationProperties = PropertiesOf<BambooHRAccountInformation>;
export type TabularDataProperties = PropertiesOf<BambooHRTabularData>;

export interface IAttachment {
  fields: {
    item?: object[];
  };
  actions: {
    item?: object[];
  };
}
