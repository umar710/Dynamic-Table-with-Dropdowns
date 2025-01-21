import React, { useState } from "react";
import Select from "react-select";
import "./App.css"; // Assuming you add some basic styling

const App = () => {
  const initialOptionsColumn1 = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ];

  const [column1Options, setColumn1Options] = useState(initialOptionsColumn1);
  const [column2Options, setColumn2Options] = useState([
    { value: "Item 1", label: "Item 1" },
    { value: "Item 2", label: "Item 2" },
    { value: "Item 3", label: "Item 3" },
  ]);
  const [rows, setRows] = useState([{ column1: null, column2: [] }]);

  const handleColumn1Change = (selectedOption, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].column1 = selectedOption;
    setRows(updatedRows);

    // Update options to prevent re-selection
    const selectedValues = updatedRows
      .map((row) => row.column1?.value)
      .filter(Boolean);
    setColumn1Options(
      initialOptionsColumn1.filter(
        (option) => !selectedValues.includes(option.value)
      )
    );
  };

  const handleColumn2Change = (selectedOptions, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].column2 = selectedOptions;
    setRows(updatedRows);
  };

  const addNewItemToColumn2 = (newItem) => {
    const newOption = { value: newItem, label: newItem };
    setColumn2Options([...column2Options, newOption]);
  };

  const handleAddRow = () => {
    setRows([...rows, { column1: null, column2: [] }]);
  };

  return (
    <div className="App p-6">
      <h1 className="text-2xl font-bold mb-4">Dynamic Table with Dropdowns</h1>
      <table className="table-auto border-collapse border border-gray-300 w-full mb-4">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Label 1</th>
            <th className="border border-gray-300 px-4 py-2">Label 2</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">
                <Select
                  options={column1Options}
                  value={row.column1}
                  onChange={(option) => handleColumn1Change(option, index)}
                  isClearable
                />
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <Select
                  options={[
                    ...column2Options,
                    {
                      label: "Add New Item...",
                      value: "add-new-item",
                      isDisabled: true,
                      customComponent: true,
                    },
                  ]}
                  value={row.column2}
                  onChange={(options) => handleColumn2Change(options, index)}
                  isMulti
                />
                <button
                  className="mt-2 bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => {
                    const newItem = prompt("Enter new item for Label 2:");
                    if (newItem) addNewItemToColumn2(newItem);
                  }}
                >
                  Add New Item
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={handleAddRow}
      >
        Add New Row
      </button>
    </div>
  );
};

export default App;
