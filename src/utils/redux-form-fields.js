import React from 'react';

export const renderInput = ({divClassName,inputClassName,input,label,type,placeholder,meta:{touched,error},disabled}) =>{
	return(
		<div className={divClassName}>
		  <label className="form-label">{label}</label>
		  <input className={inputClassName} type={type} placeholder={placeholder} {...input}/>
		</div>
	);
};


export const renderFileInput = ({divClassName,inputClassName,input,type,placeholder}) => {
	return(
		<div className={divClassName}>
			<input className={inputClassName} type={type} placeholder={placeholder} {...input}/>
		</div>
	);
}


//form-group form-group-modal
//form-input input-lg