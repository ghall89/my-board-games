interface ThumbnailProps {
	src: string;
	alt: string;
}

export default function Thumbnail(props: ThumbnailProps) {
	return (
		<div class="avatar">
			<div class="mask mask-squircle size-10 md:size-12">
				<img src={props.src} alt={props.alt} />
			</div>
		</div>
	);
}
