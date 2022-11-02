/** @format */

import React, { useState } from 'react';
import { Flex, Box, Text, Radio, RadioGroup, Stack, Button, Select } from '@chakra-ui/react';

export const Environment = () => {
	const [data, setData] = useState<any>();
	const [loading, setLoading] = useState(true);

	const handleClick = async () => {
		setLoading(true);
		try {
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
									{/* <Radio value='2'>Staging</Radio>
									<Radio value='3'>Production</Radio> */}
								</Stack>
							</RadioGroup>
						</Flex>
					</Flex>
					<Button mt='8' colorScheme='blue' onClick={handleClick}>
						Select
					</Button>
					<Flex>
						{data && (
							<Select mt='6'>
								{data &&
									data.response.SecretList.map((item: any) => {
										return <option>{item.Name}</option>;
									})}
							</Select>
						)}
					</Flex>
				</Box>
			</Flex>
		</Flex>
	);
};
