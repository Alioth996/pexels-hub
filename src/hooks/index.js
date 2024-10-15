import { ref, readonly } from 'vue';
import { nanoid } from 'nanoid'
import Identicon from 'identicon.js'
import md5 from 'blueimp-md5';

// 随机生成用户头像
export function useIdenticon() {
    // 构建虚拟用户信息
    const generateUserInfo = () => ({
        avatar: new Identicon(md5(nanoid()), 32).toString(),
        uid: nanoid()
    });

    const userVisInfo = ref(generateUserInfo());

    // 刷新用户信息
    const refreshUserInfo = () => {
        userVisInfo.value = generateUserInfo();
    };

    return {
        userVisInfo: readonly(userVisInfo),
        refreshUserInfo
    }
}
