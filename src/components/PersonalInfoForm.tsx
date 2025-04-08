import React from 'react';
import { Plus, X } from 'lucide-react';

interface PersonalInfoFormProps {
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleArrayInputChange: (name: string, index: number, value: string) => void;
  handleAddArrayItem: (name: string) => void;
  handleRemoveArrayItem: (name: string, index: number) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ 
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
        <h2 className="text-2xl font-semibold text-gray-800">Personal Information</h2>
        <p className="text-gray-600 mt-1">Please fill in all required fields marked with an asterisk (*)</p>
      </div>

      {/* Basic Information Section */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Registration Number (RN) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="rn"
              value={formData.rn}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter RN number"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              IC Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="icNumber"
              value={formData.icNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Enter IC number"
              required
            />
            <p className="text-sm text-gray-500">Format: XXXXXX-XX-XXXX</p>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Case Numbers <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {formData.caseNumbers.map((caseNumber: string, index: number) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={caseNumber}
                    onChange={(e) => handleArrayInputChange('caseNumbers', index, e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder={`Case number ${index + 1}`}
                    required
                  />
                  {formData.caseNumbers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveArrayItem('caseNumbers', index)}
                      className="p-3 text-gray-500 hover:text-red-500 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => handleAddArrayItem('caseNumbers')}
                className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Plus size={16} />
                Add another case number
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Details Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-medium text-gray-800">Demographics</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              min="0"
              max="150"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Gender <span className="text-red-500">*</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Race <span className="text-red-500">*</span>
            </label>
            <select
              name="race"
              value={formData.race}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
            >
              <option value="">Select race</option>
              <option value="malay">Malay</option>
              <option value="chinese">Chinese</option>
              <option value="indian">Indian</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Nationality <span className="text-red-500">*</span>
          </label>
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            required
          >
            <option value="">Select nationality</option>
            <option value="malaysian">Malaysian</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;