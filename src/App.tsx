import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, UserSquare2, Guitar as Hospital } from 'lucide-react';
import PersonalInfoForm from './components/PersonalInfoForm';
import CaseInfoForm from './components/CaseInfoForm';

function App() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    name: '',
    rn: '',
    icNumber: '',
    caseNumbers: [''], // Changed to array
    age: '',
    gender: '',
    race: '',
    nationality: '',
    
    // Case Info
    consultant: '',
    specialist: '',
    admittingHospital: '',
    admissionOrder: '',
    referringState: '',
    referringAuthority: '',
    referringAuthoritySpecify: '',
    charges: [''], // Changed to array
    numberOfCharges: '',
    victim: '',
    firstCourtOrderDate: '',
    admissionDate: '',
    dischargeDate: '',
    reportDate: '',
    admissionToReportDays: '',
    maritalStatus: '',
    employment: '',
    residentialStatus: '',
    educationLevel: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayInputChange = (name: string, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].map((item: string, i: number) => i === index ? value : item)
    }));
  };

  const handleAddArrayItem = (name: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: [...prev[name], '']
    }));
  };

  const handleRemoveArrayItem = (name: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].filter((_: string, i: number) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Forensic Psychiatry Registration System
            </h1>
            <div className="flex items-center justify-center gap-4 bg-white rounded-full px-6 py-3 shadow-md w-fit mx-auto">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${page === 1 ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}>
                <UserSquare2 size={24} />
                <span className="font-medium">Personal Information</span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${page === 2 ? 'bg-blue-100 text-blue-700' : 'text-gray-600'}`}>
                <Hospital size={24} />
                <span className="font-medium">Case Details</span>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: page === 1 ? '50%' : '100%' }}
              ></div>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  {page === 1 ? (
                    <PersonalInfoForm 
                      formData={formData} 
                      handleInputChange={handleInputChange}
                      handleArrayInputChange={handleArrayInputChange}
                      handleAddArrayItem={handleAddArrayItem}
                      handleRemoveArrayItem={handleRemoveArrayItem}
                    />
                  ) : (
                    <CaseInfoForm 
                      formData={formData} 
                      handleInputChange={handleInputChange}
                      handleArrayInputChange={handleArrayInputChange}
                      handleAddArrayItem={handleAddArrayItem}
                      handleRemoveArrayItem={handleRemoveArrayItem}
                    />
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                  {page === 2 && (
                    <button
                      type="button"
                      onClick={() => setPage(1)}
                      className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      <ChevronLeft size={20} className="mr-2" />
                      Previous
                    </button>
                  )}
                  <button
                    type={page === 2 ? 'submit' : 'button'}
                    onClick={() => page === 1 && setPage(2)}
                    className={`flex items-center px-6 py-3 rounded-xl transition-colors ${
                      page === 2
                        ? 'bg-green-600 hover:bg-green-700 text-white ml-auto'
                        : 'bg-blue-600 hover:bg-blue-700 text-white ml-auto'
                    }`}
                  >
                    {page === 1 ? (
                      <>
                        Next
                        <ChevronRight size={20} className="ml-2" />
                      </>
                    ) : (
                      'Submit Registration'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;