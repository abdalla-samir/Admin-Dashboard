import { useState } from "react";
import Heading from "/src/components/Heading";
import DownloadIcon from "/src/assets/icons/download.svg?react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function NewProject() {
    const [inputs, setInputs] = useState({
        projectName: "",
        projectTitle: "",
        projectTags: [],
    });
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs, startDate, endDate);
    };

    return (
        <div className="overflow border border-border w-full p-6 bg-white rounded shadow">
            <Heading
                heading="New project"
                description="Create new project"
                size={{ head: "large", description: "medium" }}
                margin="4"
            />
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <label className="flex-1 text-body-medium">
                            Project Name
                            <input
                                type="text"
                                name="projectName"
                                placeholder="Enter Project Name"
                                value={inputs.projectName}
                                onChange={(event) =>
                                    setInputs({
                                        ...inputs,
                                        projectName: event.target.value,
                                    })
                                }
                                className="input"
                            />
                        </label>
                        <label className="flex-1 text-body-medium">
                            Project Title
                            <input
                                type="text"
                                placeholder="Enter Project Title"
                                name="projectTitle"
                                value={inputs.projectTitle}
                                onChange={(event) =>
                                    setInputs({
                                        ...inputs,
                                        projectTitle: event.target.value,
                                    })
                                }
                                className="input"
                            />
                        </label>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <label className="text-body-medium">
                            Project Tags
                            <Select
                                isMulti
                                value={inputs.projectTags || []}
                                onChange={(selectedOption) =>
                                    setInputs({
                                        ...inputs,
                                        projectTags: selectedOption,
                                    })
                                }
                                placeholder="Select Tags"
                                styles={{
                                    control: (base, state) => ({
                                        ...base,
                                        outline: "none",
                                        backgroundColor: "#f4f5f9",
                                        borderColor: state.isFocused
                                            ? "#dbdcde"
                                            : "#dbdcde",
                                        "&:hover": {
                                            borderColor: "#dbdcde",
                                        },
                                        marginTop: "8px",
                                        padding: "6px",
                                        boxShadow: "none",
                                    }),
                                    option: (base, state) => ({
                                        ...base,
                                        color: "black",
                                        backgroundColor: state.isFocused
                                            ? "#f4f5f9"
                                            : "white",
                                    }),
                                    multiValueRemove: (base) => ({
                                        ...base,
                                        color: "black",
                                        cursor: "pointer",
                                        transitionDuration: "0.2s",
                                        "&:hover": {
                                            color: "black",
                                            backgroundColor: "#dbdcde",
                                        },
                                    }),
                                }}
                                options={[
                                    {
                                        value: "frontend",
                                        label: "Frontend",
                                    },
                                    { value: "backend", label: "Backend" },
                                    { value: "design", label: "Design" },
                                ]}
                            />
                        </label>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <label className="flex flex-col text-body-medium">
                            Start Date
                            <DatePicker
                                className=" input"
                                placeholderText="Select Start Date"
                                selected={startDate}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </label>
                        <label className="flex flex-col text-body-medium">
                            End Date
                            <DatePicker
                                className=" input"
                                placeholderText="Select End Date"
                                selected={endDate}
                                selectsEnd
                                startDate={startDate}
                                minDate={startDate}
                                endDate={endDate}
                                onChange={(date) => setEndDate(date)}
                            />
                        </label>
                    </div>
                    <div className="bg-surface rounded p-6">
                        <span className="text-body-large text-text">
                            Starting File
                        </span>
                        <label className="cursor-pointer p-2 border-2 border-dashed border-primary  w-full h-50 mt-4 flex justify-center items-center text-body-medium">
                            <div className="flex flex-col gap-2 justify-center items-center">
                                <DownloadIcon width={50} />
                                <p className="text-center text-body-medium">
                                    <span className="text-primary">
                                        Click to upload
                                    </span>{" "}
                                    or drag and drop <br /> SVG, PNG, JPG or GIF{" "}
                                    <br />{" "}
                                    <span className="text-text-light">
                                        (max, 800x400px)
                                    </span>
                                </p>
                            </div>
                            <input type="file" className="hidden" />
                        </label>
                    </div>
                    <div className="flex justify-end gap-6">
                        <button
                            type="button"
                            className="btn bg-white border border-primary text-primary"
                            onClick={() => {
                                setInputs({
                                    projectName: "",
                                    projectTitle: "",
                                    projectTags: [],
                                });
                                setStartDate(null);
                                setEndDate(null);
                            }}
                        >
                            Cancel
                        </button>
                        <button className="btn" type="submit">
                            Create Project
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
