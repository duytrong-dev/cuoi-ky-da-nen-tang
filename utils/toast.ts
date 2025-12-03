import Toast from 'react-native-root-toast';

/**
 * Hiển thị toast thành công
 */
export const showSuccessToast = (message: string, title?: string) => {
    const displayMessage = title ? `${title}: ${message}` : message;
    Toast.show(displayMessage, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: '#10b981',
        textColor: '#ffffff',
        opacity: 1,
        containerStyle: {
            marginTop: 50,
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 8,
        },
    });
};

/**
 * Hiển thị toast lỗi
 */
export const showErrorToast = (message: string, title?: string) => {
    const displayMessage = title ? `${title}: ${message}` : message;
    Toast.show(displayMessage, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: '#ef4444',
        textColor: '#ffffff',
        opacity: 1,
        containerStyle: {
            marginTop: 50,
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 8,
        },
    });
};

/**
 * Hiển thị toast thông tin
 */
export const showInfoToast = (message: string, title?: string) => {
    const displayMessage = title ? `${title}: ${message}` : message;
    Toast.show(displayMessage, {
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: '#3b82f6',
        textColor: '#ffffff',
        opacity: 1,
        containerStyle: {
            marginTop: 50,
            paddingHorizontal: 20,
            paddingVertical: 12,
            borderRadius: 8,
        },
    });
};

/**
 * Ẩn toast hiện tại
 */
export const hideToast = () => {
    // react-native-root-toast tự động ẩn sau duration
    // Không cần implement riêng
};
