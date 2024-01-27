import { Crew } from '@graphql/__generated__/graphql-type';
import { Avatar, Box, Typography } from '@mui/material';

type PersonAvatarPropsType = {
	title: string;
	data: Crew | Crew[];
	titleClassName: string;
	valueClassName: string;
	multiple?: boolean;
};

const PersonAvatar = ({
	data,
	title,
	titleClassName,
	valueClassName,
	multiple,
}: PersonAvatarPropsType) => {
	return (
		<Box className='flex flex-col items-center justify-center'>
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
							root: 'w-16 h-16',
						}}
					/>

					<Typography component='p' className={`font-normal ${valueClassName}`}>
						{data?.name as string}
					</Typography>
				</>
			) : (
				<Box className='flex items-center justify-center gap-4'>
					{data?.map(item => (
						<Box key={item.id} className='flex flex-col items-center'>
							<Avatar
								alt={`photo of ${item?.name as string}`}
								src={`https://image.tmdb.org/t/p/w500${item?.profile_path as string}`}
								classes={{
									root: 'w-16 h-16',
								}}
							/>

							<Typography
								component='p'
								className={`font-normal ${valueClassName}`}
							>
								{item?.name as string}
							</Typography>
						</Box>
					))}
				</Box>
			)}
		</Box>
	);
};

export default PersonAvatar;
