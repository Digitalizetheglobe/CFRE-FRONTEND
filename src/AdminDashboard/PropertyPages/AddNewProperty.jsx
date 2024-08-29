import { useState } from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function AddNewProperty() {
  const [formData, setFormData] = useState({
    unitNo: '',
    floor: '',
    workstation: '',
    cabin: '',
    conferenceRoom: '',
    furniture: '',
    rentPerSqFt: '',
    maintenancePerSqFt: '',
    deposit: '',
    yearlyEscalation: '',
    agreementPeriod: '',
    lockInPeriod: '',
    agreementCharges: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://cfrecpune.com/cfreproperties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      // Handle successful form submission (e.g., show a message, clear the form, etc.)
    } catch (error) {
      console.error('Error:', error);
      // Handle errors (e.g., show an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 pl-10 pr-10">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Add New Property</h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="unitNo" className="block text-sm font-medium leading-6 text-gray-900">
                Unit No
              </label>
              <input
                id="unitNo"
                name="unitNo"
                type="text"
                value={formData.unitNo}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="floor" className="block text-sm font-medium leading-6 text-gray-900">
                Floor
              </label>
              <input
                id="floor"
                name="floor"
                type="text"
                value={formData.floor}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="workstation" className="block text-sm font-medium leading-6 text-gray-900">
                Workstation
              </label>
              <input
                id="workstation"
                name="workstation"
                type="text"
                value={formData.workstation}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="cabin" className="block text-sm font-medium leading-6 text-gray-900">
                Cabin
              </label>
              <input
                id="cabin"
                name="cabin"
                type="text"
                value={formData.cabin}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="conferenceRoom" className="block text-sm font-medium leading-6 text-gray-900">
                Conference Room
              </label>
              <input
                id="conferenceRoom"
                name="conferenceRoom"
                type="text"
                value={formData.conferenceRoom}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="furniture" className="block text-sm font-medium leading-6 text-gray-900">
                Any Other Furniture
              </label>
              <input
                id="furniture"
                name="furniture"
                type="text"
                value={formData.furniture}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="rentPerSqFt" className="block text-sm font-medium leading-6 text-gray-900">
                Rent Per Sq. Ft. on Built-up Area
              </label>
              <input
                id="rentPerSqFt"
                name="rentPerSqFt"
                type="text"
                value={formData.rentPerSqFt}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="maintenancePerSqFt" className="block text-sm font-medium leading-6 text-gray-900">
                Maintenance Per Sq. Ft. on Built-up Area
              </label>
              <input
                id="maintenancePerSqFt"
                name="maintenancePerSqFt"
                type="text"
                value={formData.maintenancePerSqFt}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="deposit" className="block text-sm font-medium leading-6 text-gray-900">
                Deposit
              </label>
              <input
                id="deposit"
                name="deposit"
                type="text"
                value={formData.deposit}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="yearlyEscalation" className="block text-sm font-medium leading-6 text-gray-900">
                Yearly Escalation
              </label>
              <input
                id="yearlyEscalation"
                name="yearlyEscalation"
                type="text"
                value={formData.yearlyEscalation}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="agreementPeriod" className="block text-sm font-medium leading-6 text-gray-900">
                Agreement Period
              </label>
              <input
                id="agreementPeriod"
                name="agreementPeriod"
                type="text"
                value={formData.agreementPeriod}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="lockInPeriod" className="block text-sm font-medium leading-6 text-gray-900">
                Lock-in Period
              </label>
              <input
                id="lockInPeriod"
                name="lockInPeriod"
                type="text"
                value={formData.lockInPeriod}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="agreementCharges" className="block text-sm font-medium leading-6 text-gray-900">
                Agreement Charges
              </label>
              <input
                id="agreementCharges"
                name="agreementCharges"
                type="text"
                value={formData.agreementCharges}
                onChange={handleChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
