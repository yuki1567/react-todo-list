import React from "react";

export function InputForm() {
  return (
    <div className="input-form">
      <form>
        <input type="text" />
        <button>
          <span className="material-icons add-icon">add_circle</span>
        </button>
      </form>
    </div>
  );
}
