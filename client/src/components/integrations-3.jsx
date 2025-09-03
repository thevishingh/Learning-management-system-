import { Gemini, Replit, MagicUI, VSCodium, MediaWiki, GooglePaLM } from '@/components/logos';
import { LogoIcon } from '@/components/logo';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function IntegrationsSection() {
    return (
        <section>
            <div className=" dark:bg-background py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid items-center sm:grid-cols-2">
                        {/* Grid of logos */}
                        <div className="dark:bg-muted/50 relative mx-auto w-fit">
                            <div className=" to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"></div>
                            <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    <Gemini />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <Replit />
                                </IntegrationCard>
                            </div>
                            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    <MagicUI />
                                </IntegrationCard>
                                <IntegrationCard
                                    borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                                    className="dark:bg-white/10">
                                    <LogoIcon />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <VSCodium />
                                </IntegrationCard>
                            </div>
                            <div className="mx-auto flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    <MediaWiki />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <GooglePaLM />
                                </IntegrationCard>
                            </div>
                        </div>

                        {/* Text content */}
                        <div className="mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                                Power Up Borcella LMS with Smart Integrations
                            </h2>
                            <p className="text-muted-foreground">
                                Seamlessly connect Borcella with AI tools, dev platforms, and content ecosystems to automate workflows, personalize learning, and scale smarter.
                            </p>
                            <Button variant="outline" size="sm" asChild>
                                <Link to="#">Explore All Integrations</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const IntegrationCard = ({
    children,
    className,
    borderClassName
}) => {
    return (
        <div
            className={cn(
                'bg-background relative flex size-20 rounded-xl dark:bg-transparent',
                className
            )}
        >
            <div
                role="presentation"
                className={cn(
                    'absolute inset-0 rounded-xl border border-black/20 dark:border-white/25',
                    borderClassName
                )}
            />
            <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
        </div>
    );
};
