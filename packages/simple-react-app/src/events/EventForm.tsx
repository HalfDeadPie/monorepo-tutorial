import React, {SyntheticEvent, useState} from "react";
import { Event } from "./Event";

interface EventFormProps{
    event: Event;
    onSave: (event: Event) => void;
    onCancel: () => void;
}

function EventForm({
    event: initialEvent,
    onSave,
    onCancel,
  }: EventFormProps) {
    const [newEvent, setEvent] = useState(initialEvent);
    const [errors, setErrors] = useState({
        name: '',
        description: '',
        budget: '',
        latitude: '',
        longtitude: ''
    });

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (!isValid()) return;
            onSave(newEvent);
    };
  
     const handleChange = (event: any) => {
       const { type, name, value, checked } = event.target;
       // if input type is checkbox use checked
       // otherwise it's type is text, number etc. so use value
       let updatedValue = type === 'checkbox' ? checked : value;
   
       //if input type is number convert the updatedValue string to a  number
       if (type === 'number') {
         updatedValue = Number(updatedValue);
       }
       const change = {
         [name]: updatedValue,
       };
   
       let updatedEvent: Event;
       // need to do functional update b/c
       // the new project state is based on the previous project state
       // so we can keep the project properties that aren't being edited  like project.id
       // the spread operator (...) is used to
       // spread the previous project properties and the new change
       setEvent((p) => {
         updatedEvent = new Event({ ...p, ...change });
         return updatedEvent;
       });

       setErrors(() => validate(updatedEvent));
     };
  
    function validate(event: Event) {
        let errors: any = { name: '', description: '', latitude: '', longtitude: '' };
        if (event.name.length === 0) {
        errors.name = 'Name is required';
        }
        if (event.name.length > 0 && event.name.length < 3) {
        errors.name = 'Name needs to be at least 3 characters.';
        }
        if (event.description.length === 0) {
        errors.description = 'Description is required.';
        }
        if (event.latitude === 0) {
          errors.latitude = 'Latitude must be more than $0.';
        }
        if (event.longtitude === 0) {
          errors.longtitude = 'Longtitude must be more than $0.';
        }
        return errors;
    }
    
    function isValid() {
        return (
        errors.name.length === 0 &&
        errors.description.length === 0 &&
        errors.latitude.length === 0 &&
        errors.longtitude.length === 0
        );
    }



    return (
        <form className="input-group vertical" onSubmit={handleSubmit}>
          <label htmlFor="name">Project Name</label>
          <input
            type="text"
            name="name"
            placeholder="enter name"
            value={newEvent.name}
            onChange={handleChange}
          />
           {errors.name.length > 0 && (
             <div className="card error">
               <p>{errors.name}</p>
             </div>
           )}
    
          <label htmlFor="description">Event Description</label>
          <textarea
            name="description"
            placeholder="enter description"
            value={newEvent.description}
            onChange={handleChange}
          />
           {errors.description.length > 0 && (
             <div className="card error">
               <p>{errors.description}</p>
             </div>
           )}

          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            placeholder="enter latitude"
            value={newEvent.latitude}
            onChange={handleChange}
          />
           {errors.latitude.length > 0 && (
             <div className="card error">
               <p>{errors.latitude}</p>
             </div>
           )}

          <label htmlFor="longtitude">Longtitude</label>
          <input
            type="number"
            name="longtitude"
            placeholder="enter longtitude"
            value={newEvent.longtitude}
            onChange={handleChange}
          />
           {errors.longtitude.length > 0 && (
             <div className="card error">
               <p>{errors.longtitude}</p>
             </div>
           )}


          <label htmlFor="isActive">Active?</label>
          <input
            type="checkbox"
            name="isActive"
            checked={newEvent.isActive}
            onChange={handleChange}
          />
          <div className="input-group">
            <button className="primary bordered medium">Save</button>
            <span />
            <button type="button" className="bordered medium" onClick={onCancel}>
              cancel
            </button>
          </div>
        </form>
      );
    }
    
    export default EventForm;

