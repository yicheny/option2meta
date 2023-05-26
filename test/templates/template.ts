
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const FormInputMeta: ComponentMetadata = {
    "componentName": "FormInput",
    "title": "FormInput",
    "docUrl": "",
    "screenshot": "",
    "devMode": "proCode",
    "npm": {
        "package": "lowcode-material-biz",
        "version": "0.1.0",
        "exportName": "FormInput",
        "main": "src\\index.tsx",
        "destructuring": true,
        "subName": ""
    },
    "configure": {
        "props": [
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "Key",
                        "zh-CN": "Key"
                    }
                },
                "name": "Key",
                "setter": {
                    "componentName": "StringSetter",
                    "isRequired": true,
                    "initialValue": ""
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "hostType",
                        "zh-CN": "hostType"
                    }
                },
                "name": "hostType",
                "setter": {
                    "componentName": "SelectSetter",
                    "props": {
                        "dataSource": [
                            {
                                "label": "Select",
                                "value": "Select"
                            },
                            {
                                "label": "MulSelect",
                                "value": "MulSelect"
                            },
                            {
                                "label": "DatePicker",
                                "value": "DatePicker"
                            },
                            {
                                "label": "DatePickerRange",
                                "value": "DatePickerRange"
                            },
                            {
                                "label": "Input",
                                "value": "Input"
                            },
                            {
                                "label": "NumberInput",
                                "value": "NumberInput"
                            }
                        ],
                        "options": [
                            {
                                "label": "Select",
                                "value": "Select"
                            },
                            {
                                "label": "MulSelect",
                                "value": "MulSelect"
                            },
                            {
                                "label": "DatePicker",
                                "value": "DatePicker"
                            },
                            {
                                "label": "DatePickerRange",
                                "value": "DatePickerRange"
                            },
                            {
                                "label": "Input",
                                "value": "Input"
                            },
                            {
                                "label": "NumberInput",
                                "value": "NumberInput"
                            }
                        ]
                    },
                    "isRequired": true,
                    "initialValue": "Select"
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "defaults",
                        "zh-CN": "defaults"
                    }
                },
                "name": "defaults",
                "setter": {
                    "componentName": "MixedSetter",
                    "props": {
                        "setters": [
                            {
                                "componentName": "StringSetter",
                                "isRequired": false,
                                "initialValue": ""
                            },
                            {
                                "componentName": "ArraySetter",
                                "props": {
                                    "itemSetter": {
                                        "componentName": "MixedSetter",
                                        "props": {
                                            "setters": [
                                                {
                                                    "componentName": "StringSetter",
                                                    "isRequired": false,
                                                    "initialValue": ""
                                                },
                                                {
                                                    "componentName": "NumberSetter",
                                                    "isRequired": false,
                                                    "initialValue": 0
                                                }
                                            ]
                                        }
                                    }
                                },
                                "initialValue": []
                            }
                        ]
                    },
                    "isRequired": true
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "nameChinese",
                        "zh-CN": "nameChinese"
                    }
                },
                "name": "nameChinese",
                "setter": {
                    "componentName": "StringSetter",
                    "isRequired": true,
                    "initialValue": ""
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "nameEnglish",
                        "zh-CN": "nameEnglish"
                    }
                },
                "name": "nameEnglish",
                "setter": {
                    "componentName": "StringSetter",
                    "isRequired": true,
                    "initialValue": ""
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "parameters",
                        "zh-CN": "parameters"
                    }
                },
                "name": "parameters",
                "setter": {
                    "componentName": "StringSetter",
                    "isRequired": true,
                    "initialValue": ""
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "whetherForbid",
                        "zh-CN": "whetherForbid"
                    }
                },
                "name": "whetherForbid",
                "setter": {
                    "componentName": "BoolSetter",
                    "isRequired": true,
                    "initialValue": false
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "whetherMust",
                        "zh-CN": "whetherMust"
                    }
                },
                "name": "whetherMust",
                "setter": {
                    "componentName": "BoolSetter",
                    "isRequired": true,
                    "initialValue": false
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "option",
                        "zh-CN": "option"
                    }
                },
                "name": "option",
                "setter": {
                    "componentName": "ArraySetter",
                    "props": {
                        "itemSetter": {
                            "componentName": "ObjectSetter",
                            "props": {
                                "config": {
                                    "items": [
                                        {
                                            "title": {
                                                "label": {
                                                    "type": "i18n",
                                                    "en-US": "label",
                                                    "zh-CN": "label"
                                                }
                                            },
                                            "name": "label",
                                            "setter": {
                                                "componentName": "MixedSetter",
                                                "props": {
                                                    "setters": [
                                                        {
                                                            "componentName": "StringSetter",
                                                            "isRequired": false,
                                                            "initialValue": ""
                                                        },
                                                        {
                                                            "componentName": "NumberSetter",
                                                            "isRequired": false,
                                                            "initialValue": 0
                                                        }
                                                    ]
                                                },
                                                "isRequired": true
                                            }
                                        },
                                        {
                                            "title": {
                                                "label": {
                                                    "type": "i18n",
                                                    "en-US": "value",
                                                    "zh-CN": "value"
                                                }
                                            },
                                            "name": "value",
                                            "setter": {
                                                "componentName": "MixedSetter",
                                                "props": {
                                                    "setters": [
                                                        {
                                                            "componentName": "StringSetter",
                                                            "isRequired": false,
                                                            "initialValue": ""
                                                        },
                                                        {
                                                            "componentName": "NumberSetter",
                                                            "isRequired": false,
                                                            "initialValue": 0
                                                        }
                                                    ]
                                                },
                                                "isRequired": true
                                            }
                                        }
                                    ],
                                    "extraSetter": {
                                        "componentName": "MixedSetter",
                                        "isRequired": false,
                                        "props": {}
                                    }
                                }
                            }
                        }
                    },
                    "initialValue": []
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "suffix",
                        "zh-CN": "suffix"
                    }
                },
                "name": "suffix",
                "setter": {
                    "componentName": "StringSetter",
                    "isRequired": false,
                    "initialValue": ""
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "max",
                        "zh-CN": "max"
                    }
                },
                "name": "max",
                "setter": {
                    "componentName": "NumberSetter",
                    "isRequired": true,
                    "initialValue": 0
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "min",
                        "zh-CN": "min"
                    }
                },
                "name": "min",
                "setter": {
                    "componentName": "NumberSetter",
                    "isRequired": true,
                    "initialValue": 0
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "maxLength",
                        "zh-CN": "maxLength"
                    }
                },
                "name": "maxLength",
                "setter": {
                    "componentName": "NumberSetter",
                    "isRequired": true,
                    "initialValue": 0
                }
            },
            {
                "title": {
                    "label": {
                        "type": "i18n",
                        "en-US": "digit",
                        "zh-CN": "digit"
                    }
                },
                "name": "digit",
                "setter": {
                    "componentName": "NumberSetter",
                    "isRequired": true,
                    "initialValue": 0
                }
            }
        ],
        "supports": {
            "style": true
        },
        "component": {}
    }
};
const snippets: Snippet[] = '%%SNIPPETS%%';

export default {
    ...FormInputMeta,
    snippets
};
