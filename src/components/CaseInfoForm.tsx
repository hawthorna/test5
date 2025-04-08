import React from 'react';
import { Plus, X } from 'lucide-react';

interface CaseInfoFormProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleArrayInputChange: (name: string, index: number, value: string) => void;
  handleAddArrayItem: (name: string) => void;
  handleRemoveArrayItem: (name: string, index: number) => void;
}

const CaseInfoForm: React.FC<CaseInfoFormProps> = ({ 
  formData, 
  handleInputChange,
  handleArrayInputChange,
  handleAddArrayItem,
  handleRemoveArrayItem
}) => {
  return (
    <div className="space-y-8">
      {/* Form Title */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Case Information</h2>
        <p className="text-gray-600 mt-1">Please provide details about the case</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Consultant <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="consultant"
            value={formData.consultant}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Specialist <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="specialist"
            value={formData.specialist}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Admitting Approved Hospital <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="admittingHospital"
            value={formData.admittingHospital}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Admission/Detention Order <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="admissionOrder"
            value={formData.admissionOrder}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Referring State/Territory <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="referringState"
            value={formData.referringState}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Referring Court/AGC/Authority <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="referringAuthoritySpecify"
            value={formData.referringAuthoritySpecify}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>
      </div>

      {/* Charges Section */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Charges <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          {formData.charges.map((charge: string, index: number) => (
            <div key={index} className="flex gap-2">
              <input
                type="text"
                value={charge}
                onChange={(e) => handleArrayInputChange('charges', index, e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder={`Charge ${index + 1}`}
                required
              />
              {formData.charges.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveArrayItem('charges', index)}
                  className="p-3 text-gray-500 hover:text-red-500 transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddArrayItem('charges')}
            className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
          >
            <Plus size={16} />
            Add another charge
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Victim (Violent or Sexual Offences)
          </label>
          <input
            type="text"
            name="victim"
            value={formData.victim}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Date of First Court Order <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="firstCourtOrderDate"
            value={formData.firstCourtOrderDate}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Admission Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="admissionDate"
            value={formData.admissionDate}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Discharge Date
          </label>
          <input
            type="date"
            name="dischargeDate"
            value={formData.dischargeDate}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Report Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="reportDate"
            value={formData.reportDate}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Marital Status <span className="text-red-500">*</span>
          </label>
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          >
            <option value="">Select status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Employment at Time of Offence <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="employment"
            value={formData.employment}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Residential Status Before Alleged Offence <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="residentialStatus"
            value={formData.residentialStatus}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Education Level (Completed) <span className="text-red-500">*</span>
          </label>
          <select
            name="educationLevel"
            value={formData.educationLevel}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          >
            <option value="">Select education level</option>
            <option value="primary">Primary School</option>
            <option value="secondary">Secondary School</option>
            <option value="diploma">Diploma</option>
            <option value="degree">Bachelor's Degree</option>
            <option value="masters">Master's Degree</option>
            <option value="phd">PhD</option>
            <option value="none">No Formal Education</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CaseInfoForm;