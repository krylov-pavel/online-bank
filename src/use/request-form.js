import {useField, useForm} from "vee-validate"
import * as yup from 'yup'
export function useRequestForm (fn) {
	const {isSubmitting, handleSubmit} = useForm({
		initialValues: {
			status: 'active'
		}
	})

	const {value: fio, errorMessage: fError, handleBlur: eBlur} = useField(
		'fio',
		yup.string()
			.trim()
			.required('Введите ФИО')
		)
	const {value: phone, errorMessage: pError, handleBlur: pBlur} = useField(
		'phone',
		yup.string()
			.trim()
			.required('Введите телефон')
		)
	const {value: amount, errorMessage: aError, handleBlur: aBlur} = useField(
		'amount',
		yup.number()
			.min(0, 'Сумма должна быть больше 0')
			.required('Введите сумму')
	)
	const {value: status, errorMessage: sError, handleBlur: sBlur} = useField('status')

	const onSubmit = handleSubmit(fn)

	return {
		onSubmit,
		isSubmitting,
		fio,
		fError,
		eBlur,
		phone,
		pError,
		pBlur,
		amount,
		aError,
		aBlur,
		status,
		sError,
		sBlur
	}
}
