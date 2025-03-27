import { Line, Path, Svg } from "react-native-svg";


export const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ color = "black", ...props }) => {
    return (
        <Svg width="17" height="16" viewBox="0 0 17 16" fill="none">
            <Path d="M12.1719 10.0629H11.4492L11.1931 9.81589C12.0896 8.77301 12.6293 7.4191 12.6293 5.94625C12.6293 2.66209 9.96723 0 6.68307 0C3.39891 0 0.736816 2.66209 0.736816 5.94625C0.736816 9.23042 3.39891 11.8925 6.68307 11.8925C8.15591 11.8925 9.50983 11.3528 10.5527 10.4563L10.7997 10.7124V11.4351L15.3738 16L16.7368 14.6369L12.1719 10.0629ZM6.68307 10.0629C4.4052 10.0629 2.56643 8.22413 2.56643 5.94625C2.56643 3.66838 4.4052 1.82962 6.68307 1.82962C8.96094 1.82962 10.7997 3.66838 10.7997 5.94625C10.7997 8.22413 8.96094 10.0629 6.68307 10.0629Z" fill={color} />
        </Svg>
    );
};
export const AddIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = 24, color = 'black', ...props }) => {
    return (
        <Svg width={width} height={width} viewBox="0 0 24 24" fill="none">
            <Path
                d="M12 4V20M4 12H20"
                stroke={color}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
};
export const DeleteIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = '16', color = "black", ...props }) => {
    return (
        <Svg width={width} height={width} viewBox="0 0 15 18" fill="none">
            <Path d="M5.4 0L4.5 0.9H0V2.7H0.9V16.2C0.9 16.67 1.0722 17.1491 1.41152 17.4885C1.75085 17.8278 2.23 18 2.7 18H11.7C12.17 18 12.6491 17.8278 12.9885 17.4885C13.3278 17.1491 13.5 16.67 13.5 16.2V2.7H14.4V0.9H9.9L9 0H5.4ZM2.7 2.7H11.7V16.2H2.7V2.7ZM4.5 4.5V14.4H6.3V4.5H4.5ZM8.1 4.5V14.4H9.9V4.5H8.1Z" fill={color} />
        </Svg>
    );
};
export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = '20', color = "#1D2225", ...props }) => {
    return (
        <Svg width={width} height={width} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <Line x1="18" y1="6" x2="6" y2="18"></Line>
            <Line x1="6" y1="6" x2="18" y2="18"></Line>
        </Svg>
    );
};

export const EditIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ width = '20', color = "#1D2225", ...props }) => {
    return (
        <Svg width={width} height={width} viewBox="0 0 24 24" fill="none">
            <Path
                d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
                fill={color}
            />
        </Svg>
    );
};



