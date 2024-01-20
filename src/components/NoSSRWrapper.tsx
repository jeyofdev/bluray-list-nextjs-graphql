import dynamic from 'next/dynamic';

const NoSSRWrapper = ({ children }: any) => <>{children}</>;

export default dynamic(() => Promise.resolve(NoSSRWrapper), {
	ssr: false,
});
