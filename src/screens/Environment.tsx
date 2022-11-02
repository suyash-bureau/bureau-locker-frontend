/** @format */

import React, { useState, useEffect } from 'react';
import {
	Flex,
	Box,
	Text,
	Radio,
	RadioGroup,
	Stack,
	Button,
	Select,
	FormControl,
	FormLabel,
	FormErrorMessage,
	FormHelperText,
	Input,
} from '@chakra-ui/react';

export const Environment = () => {
	const [data, setData] = useState<any>();
	const [selectedValue, setSelectedValue] = useState();
	const [loading, setLoading] = useState(true);
	const [secretKey, setSecretKey] = useState('');
	const [secretValue, setSecretValue] = useState('');
	const [items, setItems] = useState('');

	useEffect(() => {
		const items = JSON.parse(localStorage.getItem('User') as any);
		if (items) {
			setItems(items);
		}
	}, []);

	const handleChange = (e: any) => {
		setSelectedValue(e.target.value);
	};

	const handleClick = async () => {
		try {
			setLoading(true);
			const response = await fetch('http://localhost:8080/list', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
				},
			}).then((r) => r.json());
			setData(response);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const formData = {
		name: selectedValue,
		key: secretKey,
		value: secretValue,
		user: items,
	};

	const handleSubmitClick = async () => {
		try {
			var header = new Headers({
				'Content-Type': 'application/json',
				'Access-Control-Allow-Methods': '*',
			});

			const response = await fetch('http://192.168.4.188:8080/create', {
				method: 'OPTIONS',
				headers: header,
				body: JSON.stringify(formData),
			}).then((r) => r.json());
			setData(response);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Flex height='100vh'>
			<Flex
				bg='#edf3f8'
				_dark={{
					bg: '#484848',
				}}
				p={50}
				w='full'
				alignItems='center'
				justifyContent='center'>
				<Box
					mx='auto'
					px={8}
					py={4}
					rounded='lg'
					shadow='lg'
					bg='white'
					_dark={{
						bg: 'gray.800',
					}}
					width='800px'>
					<Box mt={2}>
						<Text
							fontSize='2xl'
							color='gray.700'
							_dark={{
								color: 'white',
							}}
							fontWeight='700'
							mb='10'
							borderBottom='1px solid #efefef'>
							Select environment
						</Text>
					</Box>
					<Flex justifyContent='space-between' alignItems='center' mt={4}>
						<Flex>
							<RadioGroup>
								<Stack direction='row' gap={6}>
									<Radio value='1'>Development</Radio>
								</Stack>
							</RadioGroup>
						</Flex>
					</Flex>
					<Button mt='8' colorScheme='blue' onClick={handleClick}>
						Select
					</Button>
					<Flex>
						{data && (
							<Select mt='6' onChange={handleChange}>
								{data &&
									data.response.SecretList.map((item: any) => {
										return (
											<option key={item.Name} value={item.Name} selected={item.Name}>
												{item.Name}
											</option>
										);
									})}
							</Select>
						)}
					</Flex>
					<Flex>
						{selectedValue && (
							<Flex mt='6' direction='column' borderTop='1px solid #464a53' w='full'>
								<Text fontSize='2xl' mt='6' mb='6'>
									Add Secrets
								</Text>
								<Flex gap={4}>
									<FormControl mb='4'>
										<FormLabel>Secret Key</FormLabel>
										<Input type='email' onChange={(e) => setSecretKey(e.target.value)} />
									</FormControl>

									<FormControl>
										<FormLabel>Secret Value</FormLabel>
										<Input type='email' onChange={(e) => setSecretValue(e.target.value)} />
									</FormControl>
								</Flex>
								<Flex justify='center' mt='3'>
									<Button colorScheme='blue' w='fit-content' onClick={handleSubmitClick}>
										Add Secrets
									</Button>
								</Flex>
							</Flex>
						)}
					</Flex>
				</Box>
			</Flex>
		</Flex>
	);
};
