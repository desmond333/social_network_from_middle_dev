import { FC, ReactNode } from "react"
import { classNames as cn } from "shared/lib/classNames"
import { TextAlign, TextTag, TextVariant, TextWeight } from "shared/ui/Text/types"
import { TextColors } from "shared/ui/types"

type TextUIProps = {
  color?: TextColors;
  children: ReactNode;
  align?: TextAlign;
  id?: string;
};

type TextIProps = {
  color?: TextColors;
  children: ReactNode;
  tag?: "div" | "p" | "span";
  weight?: TextWeight;
  align?: TextAlign;
};

export const H1: FC<TextUIProps> = ({ color, children, align, id }) => (
  <Text
    variant="h1"
    color={color}
    tag="H1"
    weight="extra-bold"
    align={align}
    id={id}
  >
    {children}
  </Text>
)
export const H2: FC<TextUIProps> = ({ color, children, align, id }) => (
  <Text variant="h2" color={color} tag="H2" weight="bold" align={align} id={id}>
    {children}
  </Text>
)
export const H3: FC<TextUIProps> = ({ color, children, align, id }) => (
  <Text variant="h3" color={color} tag="H3" weight="bold" align={align} id={id}>
    {children}
  </Text>
)
export const H4: FC<TextUIProps> = ({ color, children, align, id }) => (
  <Text variant="h4" color={color} tag="H4" weight="bold" align={align} id={id}>
    {children}
  </Text>
)
export const H5: FC<TextIProps> = ({ color, children, align, tag }) => (
  <Text variant="h5" color={color} tag={tag} weight="semibold" align={align}>
    {children}
  </Text>
)
export const BodyXl: FC<TextIProps> = ({
                                         color,
                                         children,
                                         tag,
                                         weight,
                                         align,
                                       }) => (
  <Text variant="body-xl" color={color} tag={tag} weight={weight} align={align}>
    {children}
  </Text>
)
export const BodyL: FC<TextIProps> = ({
                                        color,
                                        children,
                                        tag,
                                        weight,
                                        align,
                                      }) => (
  <Text variant="body-l" color={color} tag={tag} weight={weight} align={align}>
    {children}
  </Text>
)
export const BodyM: FC<TextIProps> = ({
                                        color,
                                        children,
                                        tag,
                                        weight,
                                        align,
                                      }) => (
  <Text variant="body-m" color={color} tag={tag} weight={weight} align={align}>
    {children}
  </Text>
)
export const BodyS: FC<TextIProps> = ({
                                        color,
                                        children,
                                        tag,
                                        weight,
                                        align,
                                      }) => (
  <Text variant="body-s" color={color} tag={tag} weight={weight} align={align}>
    {children}
  </Text>
)
export const TextButton: FC<TextIProps> = ({
                                             color,
                                             children,
                                             tag,
                                             weight = "regular",
                                             align,
                                           }) => (
  <Text variant="button" color={color} tag={tag} weight={weight} align={align}>
    {children}
  </Text>
)
export const FormInputText: FC<TextIProps> = ({
                                                color,
                                                children,
                                                tag,
                                                weight,
                                                align,
                                              }) => (
  <Text
    variant="form-input-text"
    color={color}
    tag={tag}
    weight={weight}
    align={align}
  >
    {children}
  </Text>
)
export const FormPlaceholder: FC<TextIProps> = ({
                                                  color,
                                                  children,
                                                  tag,
                                                  weight,
                                                  align,
                                                }) => (
  <Text
    variant="form-placeholder"
    color={color}
    tag={tag}
    weight={weight}
    align={align}
  >
    {children}
  </Text>
)
export const ModalTitle: FC<TextIProps> = ({
                                             color,
                                             children,
                                             tag,
                                             weight,
                                             align,
                                           }) => (
  <Text
    variant="modal-title"
    color={color}
    tag={tag}
    weight={weight}
    align={align}
  >
    {children}
  </Text>
)
export const PageError: FC<TextIProps> = ({
                                            color,
                                            children,
                                            tag,
                                            weight,
                                            align,
                                          }) => (
  <Text
    variant="page-error"
    color={color}
    tag={tag}
    weight={weight}
    align={align}
  >
    {children}
  </Text>
)
export const TextPagination: FC<TextIProps> = ({
                                                 color,
                                                 children,
                                                 tag,
                                                 weight = "bold",
                                                 align,
                                               }) => (
  <Text
    variant="pagination"
    color={color}
    tag={tag}
    weight={weight}
    align={align}
  >
    {children}
  </Text>
)
export const SliderUrl: FC<TextIProps> = ({
                                            color,
                                            children,
                                            tag,
                                            weight,
                                            align,
                                          }) => (
  <Text
    variant="slider-url"
    color={color}
    tag={tag}
    weight={weight}
    align={align}
  >
    {children}
  </Text>
)
export const UrlsMenu: FC<TextIProps> = ({
                                           color,
                                           children,
                                           tag,
                                           weight,
                                           align,
                                         }) => (
  <Text
    variant="urls-menu"
    color={color}
    tag={tag}
    weight={weight}
    align={align}
  >
    {children}
  </Text>
)
export const SliderHeadline: FC<TextIProps> = ({
                                                 color,
                                                 children,
                                                 tag,
                                                 weight = "extra-bold",
                                                 align,
                                               }) => (
  <Text
    variant="slider-headline"
    color={color}
    tag={tag}
    weight={weight}
    align={align}
  >
    {children}
  </Text>
)

type TextProps = {
  variant?: TextVariant;
  color?: TextColors;
  children: ReactNode;
  tag?: TextTag;
  weight?: TextWeight;
  align?: TextAlign;
  id?: string;
};

const Text: FC<TextProps> = ({
                               variant,
                               color = "primary",
                               tag = "p",
                               children,
                               weight = "regular",
                               align,
                               id,
                             }) => (
  <>
    {tag === "H1" && (
      <h1
        className={cn("text", {
          [`text--size-${variant}`]: variant,
          [`text--color-${color}`]: color,
          [`text--weight-${weight}`]: weight,
          [`text--align-${align}`]: align,
        })}
        id={id}
      >
        {children}
      </h1>
    )}
    {tag === "H2" && (
      <h2
        className={cn("text", {
          [`text--size-${variant}`]: variant,
          [`text--color-${color}`]: color,
          [`text--weight-${weight}`]: weight,
          [`text--align-${align}`]: align,
        })}
        id={id}
      >
        {children}
      </h2>
    )}
    {tag === "H3" && (
      <h3
        className={cn("text", {
          [`text--size-${variant}`]: variant,
          [`text--color-${color}`]: color,
          [`text--weight-${weight}`]: weight,
          [`text--align-${align}`]: align,
        })}
        id={id}
      >
        {children}
      </h3>
    )}
    {tag === "H4" && (
      <h4
        className={cn("text", {
          [`text--size-${variant}`]: variant,
          [`text--color-${color}`]: color,
          [`text--weight-${weight}`]: weight,
          [`text--align-${align}`]: align,
        })}
        id={id}
      >
        {children}
      </h4>
    )}
    {tag === "H5" && (
      <h5
        className={cn("text", {
          [`text--size-${variant}`]: variant,
          [`text--color-${color}`]: color,
          [`text--weight-${weight}`]: weight,
          [`text--align-${align}`]: align,
        })}
        id={id}
      >
        {children}
      </h5>
    )}
    {tag === "div" && (
      <div
        className={cn("text", {
          [`text--size-${variant}`]: variant,
          [`text--color-${color}`]: color,
          [`text--weight-${weight}`]: weight,
          [`text--align-${align}`]: align,
        })}
        id={id}
      >
        {children}
      </div>
    )}
    {tag === "p" && (
      <p
        className={cn("text", {
          [`text--size-${variant}`]: variant,
          [`text--color-${color}`]: color,
          [`text--weight-${weight}`]: weight,
          [`text--align-${align}`]: align,
        })}
        id={id}
      >
        {children}
      </p>
    )}
    {tag === "span" && (
      <span
        className={cn("text", {
          [`text--size-${variant}`]: variant,
          [`text--color-${color}`]: color,
          [`text--weight-${weight}`]: weight,
          [`text--align-${align}`]: align,
        })}
        id={id}
      >
        {children}
      </span>
    )}
  </>
)
