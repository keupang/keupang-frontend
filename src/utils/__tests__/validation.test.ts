import { describe, it, expect } from 'vitest';
import {
	validateEmail,
	validatePassword,
	validatePhone,
	validateName,
} from './../validation';

describe('validation.ts > ', () => {
	describe('validateEmail > ', () => {
		it('유효한 이메일을 통과시켜야 한다.', () => {
			expect(validateEmail('user', 'example.com')).toBe(true);
			expect(validateEmail('test.user', 'sub.example.co')).toBe(true);
		});

		it('잘못된 이메일은 실패시켜야 한다.', () => {
			expect(validateEmail('user', 'example')).toBe(false); // 도메인에 '.'이 없음
			expect(validateEmail('user@invalid', 'example.com')).toBe(false); // '@' 중복
		});
	});

	describe('validatePassword > ', () => {
		it('유효한 비밀번호를 통과시켜야 한다.', () => {
			expect(validatePassword('Abcd1234!')).toBe(true);
			expect(validatePassword('Strong1!Password')).toBe(true);
		});

		it('잘못된 비밀번호를 실패시켜야 한다.', () => {
			expect(validatePassword('short1!')).toBe(false); // 8자 미만
			expect(validatePassword('nocapital123!')).toBe(false); // 대문자 없음
			expect(validatePassword('NOLOWERCASE1!')).toBe(false); // 소문자 없음
			expect(validatePassword('NoNumber!')).toBe(false); // 숫자 없음
			expect(validatePassword('NoSpecial123')).toBe(false); // 특수문자 없음
		});
	});

	describe('validatePhone > ', () => {
		it('유효한 전화번호를 통과시켜야 한다.', () => {
			expect(validatePhone('01012345678')).toBe(true);
			expect(validatePhone('0111234567')).toBe(true);
		});

		it('잘못된 전화번호를 실패시켜야 한다.', () => {
			expect(validatePhone('123456')).toBe(false); // 길이가 짧음
			expect(validatePhone('01234abcd56')).toBe(false); // 숫자가 아님
			expect(validatePhone('123456789012')).toBe(false); // 길이가 초과됨
		});
	});

	describe('validateName > ', () => {
		it('유효한 이름을 통과시켜야 한다.', () => {
			expect(validateName('홍길동')).toBe(true);
			expect(validateName('John Doe')).toBe(true);
			expect(validateName('김철수')).toBe(true);
		});

		it('잘못된 이름을 실패시켜야 한다.', () => {
			expect(validateName('a')).toBe(false); // 2자 미만
			expect(
				validateName('VeryVeryLongNameThatExceedsFiftyCharactersCharacters')
			).toBe(false); // 50자 초과
			expect(validateName('홍길동123')).toBe(false); // 숫자 포함
			expect(validateName('홍@길동')).toBe(false); // 특수문자 포함
		});
	});
});
