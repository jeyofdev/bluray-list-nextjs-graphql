/* eslint-disable tailwindcss/no-custom-classname */
import { Cast, Crew } from '@graphql/__generated__/graphql-type';
import { Avatar, Box, Typography } from '@mui/material';

type PersonAvatarPropsType = {
	title: string;
	data: Cast | Cast[] | Crew | Crew[] | undefined;
	titleClassName: string;
	valueClassName: string;
	multiple?: boolean;
	horizontalAlign: 'start' | 'end' | 'center';
	isCast?: boolean;
};

const PersonAvatar = ({
	data,
	title,
	titleClassName,
	valueClassName,
	horizontalAlign,
	isCast,
}: PersonAvatarPropsType) => {
	return (
		<>
			{data ? (
				<Box className={`justify- items-${horizontalAlign} flex flex-col`}>
					<Typography
						component='h6'
						className={`mb-1 w-full font-semibold ${titleClassName}`}
					>
						{title} :
					</Typography>

					{!Array.isArray(data) ? (
						<>
							<Avatar
								alt={`photo of ${data?.name as string}`}
								src={`https://image.tmdb.org/t/p/w500${data?.profile_path as string}`}
								classes={{
									root: 'w-20 h-20',
								}}
							/>

							<Typography
								component='p'
								className={`font-normal ${valueClassName}`}
							>
								{data?.name as string}
							</Typography>
						</>
					) : (
						<Box className='flex flex-wrap items-center justify-start gap-7'>
							{data?.map(item => (
								<Box key={item.id} className='flex flex-col items-center'>
									<Avatar
										alt={`photo of ${item?.name as string}`}
										src={`https://image.tmdb.org/t/p/w500${item?.profile_path as string}`}
										classes={{
											root: 'w-20 h-20',
										}}
									/>

									<Typography
										component='p'
										className={`text-center font-normal ${valueClassName}`}
									>
										{item?.name as string}
										{isCast ? (
											<span className='block text-xs text-primary-400'>
												({(item as Cast)?.character})
											</span>
										) : null}
									</Typography>
								</Box>
							))}
						</Box>
					)}
				</Box>
			) : null}
		</>
	);
};

export default PersonAvatar;
