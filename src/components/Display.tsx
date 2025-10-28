type Props = { value: string };

export const Display = ({ value }: Props) => {
    return (
        <div className="rounded-xl p-4 mb-6 shadow-inner border-4 border-black">
            <div className="text-right text-black text-3xl font-bold font-mono min-h-[3rem] flex items-center justify-end">
                {value}
            </div>
        </div>
    );
};
