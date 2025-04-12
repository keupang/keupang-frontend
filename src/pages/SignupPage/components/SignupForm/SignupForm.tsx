import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';

import {
	validatePassword,
	validatePhone,
	validateName,
} from '../../../../utils/validation/validation';

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { EMAIL_DOMAIN } from '@constants/domain/emailDomain';
import { Button } from '../../../../components/common/Button/Button';

import { useNavigation } from '@/hooks/useNavigation';
import { useTimer } from '@/hooks/useTimer';
import { useEmailValidation } from '@/hooks/auth/useEmailValidation';
import { useCustomDomain } from '@/hooks/auth/useCustomDomain';
import { useEmailVerification } from '@/hooks/auth/useEmailVerification';
import { useInputOffset } from '@/hooks/useInputOffset';
import { useOverlay } from '@/hooks/useOverlay';
import useUserRegisterMutation from '@/hooks/quries/useUserRegisterMutation';

import {
	FormContainer,
	InputWrapper,
	Notice,
	ToggleIcon,
	EmailInput,
	Select,
	AtSymbol,
	Timer,
} from './SignupForm.styled';
import { handleSignupSubmit } from '../../../../utils/form/handleSignupSubmit';

import { Input, ErrorText, Title } from '@/styles/commonStyles';

export interface SignupFormData {
	emailLocal: string;
	emailDomain: string;
	customEmailDomain?: string;
	emailVerification: string;
	password: string;
	confirmPassword: string;
	name: string;
	phone: string;
}

const SignupForm: React.FC = () => {
	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors },
	} = useForm<SignupFormData>();

	const emailLocal = watch('emailLocal');
	const emailDomain = watch('emailDomain');
	const customEmailDomain = watch('customEmailDomain');
	const code = watch('emailVerification');

	const emailInputRef = useRef<HTMLInputElement>(null);

	const passwordVisibility = useOverlay();
	const confirmPasswordVisibility = useOverlay();
	const { timeLeft, isTimerExpired, setTimeLeft, setIsTimerExpired } =
		useTimer(180);
	const { isCustomDomain, handleDomainChange } = useCustomDomain(setValue);
	const {
		showVerificationInput,
		isConfirmEmail,
		handleSendEmail,
		handleVerifyCode,
		isSendingEmail,
		isVerifyingCode,
	} = useEmailVerification(setIsTimerExpired, setTimeLeft);
	const { isEmailValid, email } = useEmailValidation(
		emailLocal || '',
		emailDomain || '',
		customEmailDomain || '',
		isCustomDomain
	);
	const { goToHome } = useNavigation();
	const leftOffset = useInputOffset(emailInputRef, isCustomDomain);
	const { mutateUserRegister, isLoading } = useUserRegisterMutation();

	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	const onSubmit = handleSignupSubmit(
		isConfirmEmail,
		isCustomDomain,
		goToHome,
		mutateUserRegister
	);

	return (
		<FormContainer onSubmit={handleSubmit(onSubmit)}>
			<Title>회원가입을 위한 정보를 입력하세요</Title>
			<Notice>아래 양식에 필요한 정보를 입력해 주세요.</Notice>
			&nbsp;
			<InputWrapper style={{ margin: 0 }}>
				<EmailInput
					type='text'
					placeholder='이메일 아이디'
					{...register('emailLocal', {
						required: '이메일 아이디를 입력해주세요.',
					})}
					ref={(el) => {
						register('emailLocal').ref(el);
						emailInputRef.current = el;
					}}
				/>
				<AtSymbol leftOffset={leftOffset}>@</AtSymbol>
				{isCustomDomain ? (
					<EmailInput
						type='text'
						placeholder='직접 입력'
						{...register('customEmailDomain', {
							required: '도메인을 입력해주세요.',
						})}
						style={{ flex: 1 }}
					/>
				) : (
					<Select
						{...register('emailDomain', { required: '도메인을 선택해주세요.' })}
						onChange={handleDomainChange}>
						<option value=''>선택</option>
						{EMAIL_DOMAIN.map((domain) => (
							<option key={domain} value={domain}>
								{domain}
							</option>
						))}
						<option value='custom'>직접 입력하기</option>
					</Select>
				)}
			</InputWrapper>
			<Button
				variant='primary'
				size='small'
				withBorder={false}
				disabled={!isEmailValid || isSendingEmail}
				onClick={(e) => {
					e.preventDefault();
					handleSendEmail(email);
				}}
				style={{ margin: '10px' }}
				type='button'>
				{isSendingEmail ? '보내는 중...' : '이메일 확인'}
			</Button>
			{errors.emailLocal && <ErrorText>{errors.emailLocal.message}</ErrorText>}
			{showVerificationInput && (
				<>
					<InputWrapper>
						<Input
							type='text'
							placeholder='인증번호 입력'
							{...register('emailVerification', {
								required: '인증번호를 입력해주세요.',
								validate: () =>
									!isTimerExpired ||
									isConfirmEmail ||
									'유효시간이 지났습니다. 다시 요청해주세요.',
							})}
							style={{ width: '70%' }}
							disabled={isConfirmEmail || isVerifyingCode}
						/>
						<Button
							variant='primary'
							size='small'
							withBorder={false}
							disabled={isTimerExpired || isVerifyingCode || isConfirmEmail}
							onClick={(e) => {
								e.preventDefault();
								if (isTimerExpired) {
									alert('유효시간이 지났습니다. 인증번호를 다시 요청해주세요.');
								} else {
									handleVerifyCode(email, code);
								}
							}}>
							인증번호 확인
						</Button>
						<Timer
							isTimerExpired={isTimerExpired}
							isConfirmEmail={isConfirmEmail}>
							{isConfirmEmail
								? '인증이 완료되었습니다.'
								: isTimerExpired
									? '유효시간이 지났습니다. 인증번호를 다시 요청해주세요.'
									: `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
						</Timer>
					</InputWrapper>
					{errors.emailVerification && (
						<ErrorText>{errors.emailVerification.message}</ErrorText>
					)}
				</>
			)}
			<InputWrapper>
				<Input
					type={passwordVisibility.isOpen ? 'text' : 'password'}
					placeholder='비밀번호'
					{...register('password', {
						required: '비밀번호를 입력해주세요.',
						validate: (value) =>
							validatePassword(value) ||
							'비밀번호는 8~20자이며, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.',
					})}
				/>
				<ToggleIcon type='button' onClick={passwordVisibility.toggle}>
					{passwordVisibility.isOpen ? (
						<FaRegEye size={24} />
					) : (
						<FaRegEyeSlash size={24} />
					)}{' '}
				</ToggleIcon>
			</InputWrapper>
			{errors.password && <ErrorText>{errors.password.message}</ErrorText>}
			<InputWrapper>
				<Input
					type={confirmPasswordVisibility.isOpen ? 'text' : 'password'}
					placeholder='비밀번호 확인'
					{...register('confirmPassword', {
						required: '비밀번호를 다시 입력해주세요.',
					})}
				/>
				<ToggleIcon type='button' onClick={confirmPasswordVisibility.toggle}>
					{confirmPasswordVisibility.isOpen ? (
						<FaRegEye size={24} />
					) : (
						<FaRegEyeSlash size={24} />
					)}
				</ToggleIcon>
			</InputWrapper>
			{errors.confirmPassword && (
				<ErrorText>{errors.confirmPassword.message}</ErrorText>
			)}
			<InputWrapper>
				<Input
					type='text'
					placeholder='이름'
					{...register('name', {
						required: '이름을 입력해주세요.',
						validate: (value) =>
							validateName(value) ||
							'이름은 2~50자의 한글 또는 영문이어야 합니다.',
					})}
				/>
			</InputWrapper>
			{errors.name && <ErrorText>{errors.name.message}</ErrorText>}
			<InputWrapper>
				<Input
					type='tel'
					placeholder='전화번호 -빼고 입력해주시기 바랍니다.'
					{...register('phone', {
						required: '전화번호를 입력해주세요.',
						validate: (value) =>
							validatePhone(value) ||
							'전화번호는 숫자만 10~11자리로 입력해야 합니다.',
					})}
				/>
			</InputWrapper>
			{errors.phone && <ErrorText>{errors.phone.message}</ErrorText>}
			<Button variant='primary' size='large' withBorder={false} type='submit'>
				{isLoading ? '가입 중...' : '가입하기'}
			</Button>
			<Notice>가입하기를 클릭하면 이용약관에 동의하는 것입니다.</Notice>
		</FormContainer>
	);
};

export default SignupForm;
