import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from '@/lib/rpc'

type ResponseType = InferResponseType<typeof client.api.auth.login["$post"]>
type ResquestType = InferRequestType<typeof client.api.auth.login["$post"]>

export const useLogin = () => {
    const mutaion = useMutation<
        ResponseType,
        Error,
        ResquestType
    >({
        mutationFn: async ({ json }) => {
            const response = await client.api.auth.login["$post"]({ json })
            return await response.json()
        }
    })

    return mutaion
}

