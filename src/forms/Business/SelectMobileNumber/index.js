import TextField from '@mui/material/TextField';
import React from 'react';

import SelectCountryCode from '../SelectCountryCode';

import { CountryCode, MobileNumber, RowConatainer } from './styles';

function SelectMobileNumber({
	value = {},
	onChange,
	codeKey = 'country_code',
	numberKey = 'number',
	id = 'select_phone',
	inputType = 'text',
	type = 'text',
	disable_country_code = false,
	...rest
}) {
	const { [codeKey]: country_code = '', [numberKey]: number = '' } =	value || {};

	const handleCodeChange = (v) => {
		onChange({ ...(value || {}), [codeKey]: v.target.value });
	};

	const handleNumberChange = (e) => {
		onChange({ ...(value || {}), [numberKey]: e.target.value });
	};

	return (
		<RowConatainer>
			<CountryCode>
				<SelectCountryCode
					{...rest}
					value={country_code || (value || {})[codeKey]}
					onChange={handleCodeChange}
					placeholder="Select"
					name = ''
					disabled={disable_country_code}
				/>
			</CountryCode>

			<MobileNumber>
				<TextField
					{...rest}
					id="outlined-basic"
					name="mobile_number"
					type='number'
					value={number || (value || {})[numberKey]}
					onChange={handleNumberChange}
				/>
			</MobileNumber>
		</RowConatainer>
	);
}

export default SelectMobileNumber;
