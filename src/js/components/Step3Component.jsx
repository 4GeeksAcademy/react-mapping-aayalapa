import React from "react";



const Step3Component = ({person}) => {
    return (
        <div className="col-12 col-md-4 my-3">
      <div className="card text-center border-primary shadow-lg">
        <div className="card-body">
          <h4 className="card-title text-primary">{person.name}</h4>
          <h5 className="card-subtitle mb-2 text-secondary">{person.role}</h5>
          <p className="card-text lead text-muted">{person.habit}</p>
        </div>
      </div>
    </div>
    );
};

export default Step3Component;